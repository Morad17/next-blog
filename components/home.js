import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live'


export default function Home() {
    return(
        <div className="">

        <div className=""></div>

        <div className="blog-preview">  
            <LiveProvider code="<strong>Hello World!</strong>">
            <LiveEditor />
            <LiveError />
            <LivePreview />
            </LiveProvider>
        </div>
        
        </div>
    )
}