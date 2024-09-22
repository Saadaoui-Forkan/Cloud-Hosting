const articlesSkeleton = [1, 2, 3, 4, 5, 6];
const ArticlesLoading = () => {
    return (
        <section className='fix-height container m-auto px-5'>
            
            <div className="my-5 w-full md:w-2/3 m-auto bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-12 rounded-lg animate-shimmer"></div>
            
            
            <div className="flex items-center justify-center flex-wrap gap-7">
                {articlesSkeleton.map((item) => (
                    <div key={item} className="p-5 rounded-lg my-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 w-full md:w-2/5 lg:w-1/4 shadow-lg animate-shimmer">
                        
                        <h3 className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-6 rounded-md"></h3>
                        
                        <p className="my-2 text-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 p-1 h-10 rounded-md"></p>
                        
                        <div className="w-full block p-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-lg h-8"></div>
                    </div>
                ))}
            </div>
            
            
            <div className='flex items-center justify-center mt-2 mb-10'>
               <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 w-60 rounded-md h-9 animate-shimmer"></div>
            </div>
        </section>
    )
}

export default ArticlesLoading;
