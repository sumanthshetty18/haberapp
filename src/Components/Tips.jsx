import React from "react";
import '../Styles/Tips.css';
const Tips = () => {
    return (
        <>
            <div className="tips-section">
                <h2>OUR FOCUS IS OUR CLIENTS' SUCCESS</h2>
                <div className="row row2">
                    <div className="col col-3">
                        <div className="card">
                            <div className="tips-icon"><i className="fa-solid fa-credit-card"></i></div>
                            <h4>PRIVATE BANKING</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                                voluptate accusamus veniam minima aliquam. Velit porro voluptates beatae
                                commodi quidem, quis iure fugiat cumque laboriosam, quos, delectus numquam ab neque!</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="card">
                            <div className="tips-icon"><i className="fa-solid fa-line-chart"></i></div>
                            <h4>TIME SAVING TIPS</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                                voluptate accusamus veniam minima aliquam. Velit porro voluptates beatae
                                commodi quidem, quis iure fugiat cumque laboriosam, quos, delectus numquam ab neque!</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="card">
                            <div className="tips-icon"><i className="fa-solid fa-circle-dollar"></i></div>
                            <h4>BUDGETING TIPS</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                                voluptate accusamus veniam minima aliquam. Velit porro voluptates beatae
                                commodi quidem, quis iure fugiat cumque laboriosam, quos, delectus numquam ab neque!</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="card">
                            <div className="tips-icon"><i className="fa-solid fa-piggy-bank"></i></div>
                            <h4>MONEY SAVING IDEAS</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                                voluptate accusamus veniam minima aliquam. Velit porro voluptates beatae
                                commodi quidem, quis iure fugiat cumque laboriosam, quos, delectus numquam ab neque!</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tips;