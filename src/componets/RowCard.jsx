import "../css/rowCardStyle.css";

function RowCard({urlImage,name,price,quantity }){
    const contentString = `${name} - Qty (${quantity}) - Price: ${price}`;
    return (
        <>
            <div className="container-row-card">
                <div className="image-row">
                    <img src={urlImage} width={270} height={150} alt="Image"/>
                </div>
                <div className="content-row">
                    <span>{contentString}</span>
                </div>
            </div>
        </>
    );
}

export default RowCard;