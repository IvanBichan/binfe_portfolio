import {FC} from "react";
import LoadingButton from '@mui/lab/LoadingButton';

export const ButtonLoading:FC = () => {
    return (
        <LoadingButton loading
                       variant='contained'
                       style={{border: '2px solid #f9004d', minWidth: '128px'}}
                       sx={{
                           '& .MuiLoadingButton-loadingIndicator': {
                               color: '#f9004d',
                           },
                       }}
        >
            Submit
        </LoadingButton>
    )
}