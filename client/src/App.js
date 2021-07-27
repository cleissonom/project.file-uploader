import { FileUpload } from './components/FileUpload'
import './App.css';

function App() {
   return (
      <div className="container mt-4">
         <h4 className="display-4 text-center mb-4">
            <i className="fab fa-react"> </i> <i class="fab fa-js-square"></i> File Uploader
         </h4>

         <FileUpload />
      </div>
   );
}

export default App;
