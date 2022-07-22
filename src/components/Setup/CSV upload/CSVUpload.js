import React from 'react'
import "./CSVUpload.css";

const CSVUpload = () => {

    return (
        <div className=' overflow-hidden w-100 add-comp'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <h2 className='text-main'>CSV Upload</h2>
                <div className='col-lg-2'>
                    <div className=" item  ">
                        <label className="form-label">Upload to</label>
                        <select id='DomainName' className="form-select" aria-label="Default select example">
                            <option selected><span className="form-label">Competition<span className="text-danger">*</span></span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                        <select id='DomainName' className="form-select" aria-label="Default select example">
                            <option selected><span className="form-label">Country<span className="text-danger">*</span></span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                        
                    </div>
                </div>
                <div className='col-lg-3'>
                    <select id='DomainName' className="form-select" aria-label="Default select example">
                                <option selected><span className="form-label">Tag to Country Partner/Teacher</span></option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                    </select>
                </div>
                <div className='col-lg-2'>
                        <select id='DomainName' className="form-select" aria-label="Default select example">
                            <option selected><span className="form-label">School</span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                        <select id='DomainName' className="form-select" aria-label="Default select example">
                            <option selected><span className="form-label">Tuition Centre</span></option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                        <input id="pelongs-to-partner" type="checkbox"
                            className='form-check-input'
                        />
                        <label htmlFor="pelongs-to-partner" className="form-label"> Pelongs to Partner</label>
                </div>
                <div className='col-lg-2'>
                    <button className='btn btn-primary'>Reset Filters</button>
                </div>
            </div>
        </div>
    )
}


export default CSVUpload;