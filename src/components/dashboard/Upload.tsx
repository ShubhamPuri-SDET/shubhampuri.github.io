import React, { useState } from 'react';
import { UploadCloud, FileText, X } from 'lucide-react';

const DashboardUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(prev => [...prev, ...Array.from(event.target.files!)]);
    }
  };

  const removeFile = (fileName: string) => {
    setFiles(prev => prev.filter(file => file.name !== fileName));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">Upload Documents</h1>
      <div className="bg-background rounded-lg shadow p-8">
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-12 text-center">
          <UploadCloud className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-2 text-sm font-medium text-foreground">Drag and drop files here</h3>
          <p className="mt-1 text-xs text-slate-500">PDF, DOCX, PNG, JPG up to 10MB</p>
          <div className="mt-6">
            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-primary-600 font-semibold text-white hover:bg-primary-700 px-4 py-2">
              <span>Or select files</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={handleFileChange} />
            </label>
          </div>
        </div>
        {files.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-foreground mb-2">Selected files:</h4>
            <ul className="space-y-2">
              {files.map(file => (
                <li key={file.name} className="flex items-center justify-between p-2 rounded-md bg-slate-100 dark:bg-slate-800">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-slate-500 mr-2" />
                    <span className="text-sm font-medium text-foreground">{file.name}</span>
                  </div>
                  <button onClick={() => removeFile(file.name)} className="text-slate-400 hover:text-red-500">
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 px-6 py-3 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
              Upload {files.length} file(s)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardUpload;
