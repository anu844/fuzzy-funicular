import React from "react";
import { FixedSizeList as List } from "react-window";



function HuviKomponent({huvid}) {
    return (
        <div style={{ color: "rgb(12, 20, 131)" }}>
            <h2>Minu huvid:</h2>
            <List
            height={200}
            itemCount={huvid.length}
            itemSize={50}
            width={300}
            >
                {({index, style}) => (
                    <div style={style}>
                        {huvid[index].nimi}
                    </div>
                )}
            </List>
        </div>
    )
}

export default HuviKomponent;