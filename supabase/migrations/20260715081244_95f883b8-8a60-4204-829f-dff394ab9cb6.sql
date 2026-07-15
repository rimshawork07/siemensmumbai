
-- User roles infrastructure
CREATE TYPE public.app_role AS ENUM ('admin', 'staff');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Harden service_bookings policies
DROP POLICY IF EXISTS "Anyone can submit a booking" ON public.service_bookings;

-- Public bookings must be freshly-created leads; no pre-assignment of internal fields
CREATE POLICY "Anyone can submit a new booking"
  ON public.service_bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    status = 'New'
    AND assigned_technician IS NULL
    AND notes IS NULL
    AND length(customer_name) BETWEEN 2 AND 100
    AND length(phone_number) BETWEEN 7 AND 20
    AND length(problem_description) BETWEEN 5 AND 1000
  );

CREATE POLICY "Admins can view bookings"
  ON public.service_bookings FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update bookings"
  ON public.service_bookings FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete bookings"
  ON public.service_bookings FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
