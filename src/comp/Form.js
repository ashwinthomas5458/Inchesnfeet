import React from 'react';

const Form = ({data}) =>{

    return(
        <form className="form">
            <input type="hidden" name="form-Name" value={data.formName} />
            {data.label? <label>Name</label> : <></>}
            <input type="text" name="Name" required placeholder="Name" />
            <br />
            {data.label? <label >Contact</label> : <></>}
            <input type="number" name="Contact" required placeholder="Phone number" />
            <br />
            {data.label? <label >E-mail</label> : <></>}
            <input type="email" name="E-mail" required placeholder="E-mail" />
            <br />
            {data.bim ?
                <>
                    <label>Link to file</label>
                    <input type="text" name="Link to file" placeholder="Provide links to file" />
                    <input type="hidden" value="NA" name="Servicetype" />
                    <br/>
                    <label >Service</label>
                        <select name="Service" required>
                            <option value="">Choose a service</option>
                            <option value="BIM Modeling - LOD 100 -300">BIM Modeling - LOD 100 -300</option> 
                            <option value="BIM Modeling - LOD 350 - 500">BIM Modeling - LOD 350 - 500</option> 
                            <option value="Coordination/Clash Detection">Coordination/Clash Detection</option> 
                            <option value="4D Simulation">4D Simulation</option> 
                            <option value="PDF to BIM Conversion">PDF to BIM Conversion</option> 
                            <option value="MWF Strucsoft">MWF Strucsoft</option> 
                            <option value="Revit Content Creation">Revit Content Creation</option> 
                            <option value="VR">VR</option> 
                            <option value="Visualization">Visualization</option> 
                            <option value="Walkthrough Animation">Walkthrough Animation</option> 
                            <option value="BIM Workshops">BIM Workshops</option>  
                        </select>
                    <br/>
                </>
                : data.architecture ?
                    <>
                        <input type="hidden" name="Link to file" value="NA" />
                        <label>Service Type</label>
                        <select name="Servicetype" required>
                            <option value="">Choose a service type</option>
                            <option value="Design Only">Design Only</option>
                            <option value="Design and Build">Design and Build</option>
                        </select>
                        <br />
                        <label >Service</label>
                        <select name="Service" required>
                            <option value="">Choose a service</option>
                            <option value="Architectural design">Architectural design</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Renovation">Renovation</option>
                            <option value="Corporate Interior">Corporate Interior</option>
                            <option value="Facade Design">Facade Design</option>
                            <option value="Landscaping">Landscaping</option>
                            <option value="Vastu">Vastu</option>
                            <option value="Visualization">Visualization</option>
                            <option value="Walkthrough Animation">Walkthrough Animation</option>
                            <option value="Design Development">Design Development</option>
                        </select>
                        <br/>
                        <label >Area</label>
                        <input type="text" name="Area" placeholder="approximate value" />
                        <br />
                    </>
                    :
                    <>

                    </>
            }
            {data.label? <label>Note</label> : <></>}
            <textarea type="text" name="Note" placeholder="Add a note" className="note"></textarea>
            <br />
            <button className={data.label? "btn-primary": "btn-secondary"} type="submit" name="submit">Submit</button>
        </form>
    )
};

export default Form;