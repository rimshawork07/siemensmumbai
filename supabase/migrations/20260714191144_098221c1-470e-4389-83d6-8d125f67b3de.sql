
CREATE TABLE public.service_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  customer_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  locality TEXT NOT NULL,
  address_landmark TEXT,
  washing_machine_brand TEXT,
  problem_description TEXT NOT NULL,
  preferred_service_date DATE,
  preferred_time_slot TEXT,
  status TEXT NOT NULL DEFAULT 'New',
  assigned_technician TEXT,
  notes TEXT,
  lead_source TEXT DEFAULT 'website',
  service_type TEXT DEFAULT 'washing_machine_repair'
);

GRANT INSERT ON public.service_bookings TO anon, authenticated;
GRANT ALL ON public.service_bookings TO service_role;

ALTER TABLE public.service_bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can create a booking (public lead form)
CREATE POLICY "Anyone can submit a booking"
  ON public.service_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No public read/update/delete; only service_role (admin/backend) can view or manage.
