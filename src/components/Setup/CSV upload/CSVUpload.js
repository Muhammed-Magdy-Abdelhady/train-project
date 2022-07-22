import React from 'react'
import "./CSVUpload.css";
import {ReactComponent as CSVIcon} from '../../../assets/images/csv_icon.svg';

const CSVUpload = () => {

    return (
        <div className=' overflow-hidden w-100 add-comp'>
            <div className='flex-grow-1 bg-main-content py-5 px-3 overflow-hidden'>
                <div className='row'>
                    <div className='col-md-3 fix-dis'>
                        <div className='row'>
                            <h2 className='text-main'>CSV Upload</h2>
                        </div>
                        <div className='row'>
                            <h5>Upload Type:</h5>
                            <div className='col-12' id='btn-holder'>
                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
                                <label class="btn-nobg btn-outline-secondary no-red left-option btn-equal-size" for="option1">Schools</label>
                                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
                                <label class="btn-nobg btn-outline-secondary no-red right-option btn-equal-size" for="option2">Participants</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className="container top-cont">
                            <div className="row">
                                <span className='top-cont-text'>Upload to:</span>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <select id='Competition' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Competition</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select id='Country' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Country</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select id='Country' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Tag to Country Partner/Teacher</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <select id='School' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">School</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select id='Tuition' className="form-select" aria-label="Default select example">
                                        <option selected><span className="form-label">Tuition Centre</span></option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6" style={{"display": "flex"}}>
                                    <form className="form-check form-check-inline" style={{"marginTop" : "auto", "marginBottom" : "auto"}}>
                                        <input type="checkbox" className='form-check-input' id='partner'/>
                                        <label className="form-check-label small-font" htmlFor='partner'>Belongs to Partner</label>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-9"/>
                            <div className="col-md-3"><button className='btn btn-danger more-round'><i class="fa-solid fa-arrows-rotate fa-flip-vertical"/> Reset Filters</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 drag-and-drop-con">
                        <div className="row-md svg-con">
                            <CSVIcon fill='#A9ABD3' width="inherit" height="inherit"/>
                        </div>
                        <div className="row-md text-con">
                            <span className='lower-font-size'>Upload your .csv file<br/></span>
                            <span className='lower-font-size'>Drag & drop or click to upload</span>
                        </div>
                        <div className='row-md'>
                            <input type="file" className='file-input'id="input-to-btn" hidden/>
                            <label for="input-to-btn" id='choose-file-btn' className='btn btn-custom btn-sm'>Choose File</label>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default CSVUpload;