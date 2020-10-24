import React,{useState,useEffect} from 'react';
import { Grid } from "@material-ui/core";
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetails } from "./components";


const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedvideo, setSelectedvideo] = useState(null)


    useEffect(() => {
       handleSubmit('learn reactjs') 
        
    }, [])
    const handleSubmit=async searchTerm=>{
        const response=await youtube.get('search',{
            params:{
            part:'snippet',
            maxResults:5,
            key:'AIzaSyBZZB_NYBJXtLlb_cYS6B0OF33rM46XJEw',
            q:searchTerm,
    }
        } );
        console.log(response)

        setVideos(response.data.items);
        setSelectedvideo(response.data.items[0])
        
    }

    const onVideoSelect=(video)=>{
           setSelectedvideo(video)
    }
    return (
        <Grid container spacing={5} justify="center">
           <Grid item xs={12} >
               <Grid container spacing={5}>
                    <Grid item xs={12}>
                       <SearchBar onFormSubmit={handleSubmit}/>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetails video={selectedvideo} />
                    </Grid>
                    <Grid item xs={4}>
                         <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                    </Grid>
               </Grid>
           </Grid>
        </Grid>
    );
};

export default App;