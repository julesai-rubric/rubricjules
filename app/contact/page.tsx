export default function ContactPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-2xl">
        <p className="text-center text-gray-600 mb-8">
          Have a project in mind? We'd love to hear from you.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full p-2 border rounded-md h-32" placeholder="Tell us about your project"></textarea>
          </div>
          <button className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
