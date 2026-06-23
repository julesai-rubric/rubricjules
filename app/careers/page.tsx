export default function CareersPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Join Our Team</h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We're always looking for talented individuals to help us build the future of digital products.
      </p>
      <div className="grid gap-6 max-w-2xl mx-auto">
        <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Senior Frontend Engineer</h3>
          <p className="text-gray-600 mb-4">Help us craft beautiful and performant user interfaces.</p>
          <span className="text-blue-600 font-medium">View Position →</span>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Product Designer</h3>
          <p className="text-gray-600 mb-4">Design intuitive and impactful user experiences.</p>
          <span className="text-blue-600 font-medium">View Position →</span>
        </div>
      </div>
    </div>
  );
}
