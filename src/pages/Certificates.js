function Certificates({ language }){
    return(
        <>
            <div className='container mx-auto'>
                <div className='mt-20 mx-auto'>
                    <h1 className='text-center text-3xl font-semibold'>
                        {language === "en" ? "Certificates" : "เกียรติบัตร"}
                    </h1>
                </div>
                {/* -------------- */}
                
                
                <div className="flex justify-center my-40">
                    <p className="text-3xl">I'm Lazy. LOL</p>
                </div>



            </div>
        </>
    );
}

export default Certificates;