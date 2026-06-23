import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // In a real application, you would send an email or save to a database here.
    console.log('Received contact enquiry:', { name, email, subject, message });

    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ message: 'Enquiry received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact enquiry:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
