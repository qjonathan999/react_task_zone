export const VisibilityControl=({isChecked,setShowCompleted,cleanTask})=>{
    const handleDeleted=()=>{
        if(window.confirm("¿Está seguro que desea eliminar?")){
            cleanTask()
        }
    }

    const divControlStyle="d-flex justify-content-between bg-secondary text-white fw-semibold text-center p-2"
    const divInputStyle="form-check form-switch"
    const checkStyle="form-check-input"
    const labelStyle="text-info"
    const buttonStyle="btn btn-danger btn-sm fs-6"
    
    return(
        <div className={divControlStyle}>
            <div className={divInputStyle}>
                <input className={checkStyle} checked={isChecked} type="checkbox" onChange={e=>setShowCompleted(e.target.checked)}/>
                <label className={labelStyle}>Show Tasks Done</label>
            </div>
    
            <button className={buttonStyle} onClick={handleDeleted}>Clear</button>
        </div>
    )
}