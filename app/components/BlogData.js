import Image from "next/image";

const BlogData = ()=>{
    return(
        <>
                <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="py-8">
        <div className="text-gray-600 text-sm flex items-center space-x-2">
          <span>Sep 21, 2024</span>
          <span>/</span>
          <span>By @CodeBrew</span>
          <span>/</span>
          <div className="flex space-x-2">
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"> 6/20 </span>
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Apple</span>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
            Apple's iPhone 16 Goes on Sale Today Without Latest AI Features.
            </h1>
            <p className="text-neutral-600 text-lg">
            Apple's iPhone 16 and 16 Plus are now available in stores, featuring modest upgrades, 
            including a new "camera control" button, while the Apple Intelligence AI will arrive later through a software update. 
            Pre-orders indicate shorter delivery times, suggesting lower demand and higher supply. 
            Despite this, Apple's stock has risen nearly 20% year-to-date. 
            The phones are launching in almost 60 countries globally.
            </p>

            <div className="flex space-x-2">
            <span className="bg-neutral-900 text-white font-semibold px-6 py-3 text-md rounded-l-xl"> Read More @CodeBrew </span>
            <span className="bg-neutral-900 text-white font-semibold px-4 py-3 text-md rounded-r-xl">share</span>
            </div>

          </div>
          

          {/* Image Section */}
          <div className="flex justify-end">
            <div className="">
              <Image
                src="/blogger.jpg" // replace with the correct path to your image
                alt="John Bryce Home Improvement"
                objectFit="cover"
                className="rounded-xl"
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