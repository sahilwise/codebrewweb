import Image from "next/image";

const BlogData = ()=>{
    return(
        <>
                <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-8">
        <div className="text-gray-600 text-sm flex items-center space-x-2">
          <span>Sep 24, 2012</span>
          <span>/</span>
          <span>By @sahilwise</span>
          <span>/</span>
          <div className="flex space-x-2">
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Apple</span>
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Mac Tools</span>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
            MacBook Air vs. MacBook Pro: Which One is Right for You?
            </h1>
            <p className="text-gray-500 text-lg">
              Tellus integer feugiat scelerisque varius sit amet volutpat
              consequat mauris nunc congue nisi at ultrices mi tempus imperdiet
              nulla malesuada pellentesque netus et malesuada.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-end">
            <div className="">
              <Image
                src="/blogger.jpg" // replace with the correct path to your image
                alt="John Bryce Home Improvement"
                objectFit="cover"
                className="rounded-lg"
                width={400}
                height={600}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
  
    </div>

        </>
    )
}

export default BlogData;