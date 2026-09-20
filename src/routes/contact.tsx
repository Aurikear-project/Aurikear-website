import { clinics } from "../lib/practice";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Our Hospital & Clinic Locations</h1>
        <p className="text-slate-600">
          Online booking is not available. Please contact your preferred clinic location directly using the phone numbers below to arrange an appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hospital Cards List */}
        <div className="space-y-4">
          {clinics.map((clinic) => (
            <div key={clinic.id} className="p-5 border rounded-xl bg-white shadow-sm space-y-2">
              <span className="inline-block text-xs font-semibold bg-sky-100 text-sky-800 px-2.5 py-0.5 rounded">
                {clinic.type}
              </span>
              <h2 className="text-xl font-bold text-slate-800">{clinic.name}</h2>
              <p className="text-slate-600 text-sm">
                {clinic.address}, {clinic.town}, {clinic.postcode}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium">
                <a href={clinic.phoneHref} className="text-sky-700 hover:underline">
                  📞 {clinic.phone}
                </a>
                <a href={clinic.website} target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">
                  🌐 Visit Website
                </a>
              </div>

              <div className="mt-2 text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded border border-emerald-100">
                <strong>Services provided:</strong> {clinic.services}
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-[650px] rounded-xl overflow-hidden shadow border border-slate-200 sticky top-4">
          <iframe
            title="AuriKear Hospital Locations Map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d316710!2d0.01!3d51.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSpire%20Nuffield%20Hospital%20Brentwood%20Cambridge!5e0!3m2!1sen!2suk!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}