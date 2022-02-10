import React from "react";

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedadesContainer holder mainDiv">
            
            <div className="novedad">
                <img className="left" src={imagen}/>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                
                <div dangerouslySetInnerHTML={{ __html: body}} />
                <hr />
            </div>
        </div>
    );
}

export default NovedadItem;