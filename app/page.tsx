export default function Home() {
  return (
    <div className="py-20 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6">Building Tomorrow's Digital Products</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        Rubric is a digital product studio that crafts exceptional software experiences.
        We combine design and engineering to build products that matter.
      </p>
      <div className="mt-10">
        <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
          View Our Work
        </button>
      </div>
    </div>
  );
}
