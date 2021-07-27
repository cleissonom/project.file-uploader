import React, { Fragment, useState } from 'react'
import axios from 'axios'

export const FileUpload = () => {
   const [file, setFile] = useState('')
   const [fileName, setFileName] = useState('Choose File')

   const onChange = e => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
   }

   const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file)
   }

   return (
      <Fragment>
         <form onSubmit={onSubmit}>
            <div className="custom-file">
               <input type="file" className="custom-file-input w-100" id="customFile" onChange={onChange} />
               <label className="custom-file-label" for="customFile">{fileName}</label>
            </div>

            <input
               type="submit"
               value="Upload"
               className="btn btn-primary btn-block mt-4"
               disabled={fileName === 'Choose File' ? true : false}
            />
         </form>
      </Fragment>
   )
}

