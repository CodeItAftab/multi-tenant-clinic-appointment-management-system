"use client"
export default function Hero2() {

    return (
        <div className="p-10">
            <div>
                <div className="w-2xl h-100 rounded-xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=India+Gate,+New+Delhi&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </div>
    )
}