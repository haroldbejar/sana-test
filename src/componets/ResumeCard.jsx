import "../css/resumeCardStyle.css";
const grandTotal = 12.95;
const products = 2;
function ResumeCard() {

    
    return (
        <>
            <div className="container-resume-card">
                <h2 className="title-row">Cart Resume</h2>
                <br/>
                <br/>
                <span className="span-row"><b>Products:</b> ({products})</span>
                <span className="span-totals"><b>Total purchase:</b>{grandTotal}</span>
                <button className="btn-row">Confirm</button>
            </div>
        </>
    );
}
export default ResumeCard