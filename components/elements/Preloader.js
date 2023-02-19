import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
            <div className="preloader flex-1 content-center">
                <div className="logo absolute inset-y-2/4 jump">
                    <img src="/imgs/logos/favicon.svg" alt="Monst" />
                    <h1 className="text-2xl text-center font-semibold">
                        {/* TulinTechno */}
                     </h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;