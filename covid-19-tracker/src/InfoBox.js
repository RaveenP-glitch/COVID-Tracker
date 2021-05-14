import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

function InfoBox({title, cases, total}) {
    return (
        <Card>
            <CardContent>
            {/* Title */}
            <Typography className="infoBox__title" color = "textSecondary">
                {title}
            </Typography>
            {/* +120K cases,,, Number of cases. */}
            <h2 className="infoBox__cases">{cases}</h2>

            {/* 1.2M Total */}
            <Typography className="infoBox__total">
                {total} Total
            </Typography>
            </CardContent>

        </Card>
    )
}

export default InfoBox
