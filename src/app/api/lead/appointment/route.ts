import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    // Send to webhook if configured
    const webhookUrl = process.env.APPOINTMENT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }
    }

    console.log('Appointment request received:', data);

    return NextResponse.json({
      success: true,
      message: 'Randevu talebiniz alındı',
    });
  } catch (error) {
    console.error('Appointment API error:', error);
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}
