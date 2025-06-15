
-- Create a table to store leads from the exit-intent modal
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_info TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security for the new table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to submit their contact info
CREATE POLICY "Public can insert leads"
ON public.leads
FOR INSERT
WITH CHECK (true);
