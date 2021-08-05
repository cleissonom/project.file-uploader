import React, { Fragment, useState } from 'react'
import axios from 'axios'

export const FileUpload = () => {
   const [file, setFile] = useState('')
   const [fileName, setFileName] = useState('Choose File')
   const [uploadedFile, setUploadedFile] = useState({})

   const onChange = e => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
   }

   const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);

      try {
         const res = await axios.post('/upload', formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         });

         const { fileName, filePath } = res.data;

         setUploadedFile({ fileName, filePath })
      } catch (err) {
         if (err.response.status === 500) {
            console.log('There was a problem with the server')
         } else {
            console.log(err.response.data.msg)
         }
      }
   }

   return (
      <Fragment>
         <form onSubmit={onSubmit}>
            <div className="custom-file">
               <input type="file" className="custom-file-input w-100" id="customFile" onChange={onChange} />
               <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
            </div>

            <input
               type="submit"
               value="Upload"
               className="btn btn-primary btn-block mt-4"
               disabled={fileName === 'Choose File' ? true : false}
            />
         </form>
         {uploadedFile ? (
            <div className="row mt-5">
               <div className="col-md-6 m-auto">
                  <h3 className="text-center">{uploadedFile.fileName}</h3>
                  <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
               </div>
            </div>
         ) : null}
      </Fragment>
   )
}

