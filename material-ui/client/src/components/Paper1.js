import { Box, Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

const Paper1 = () => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h5' component={'div'} >
                        Maybe
                    </Typography>
                    <Typography gutterBottom variant='body2' component={'div'} >
                        Maybe-MaybeMaybeMaybeMaybeMaybeMaybeMaybeMaybe
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Paper1