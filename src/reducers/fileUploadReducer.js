const initialState = {
  fileName: "",
  fileSize: "",
  lastModified: "",
  fileFormat: "",
  validFormat: false,
};
const fileUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fileUpload/dropped":
      const file = action.payload;
      const fileFormat = file.name.split(".").pop();
      const isFileFormatValid = !!(
        fileFormat === "doc" ||
        fileFormat === "docx" ||
        fileFormat === "pdf"
      );
      return {
        ...state,
        fileName: file.name,
        fileSize: file.size,
        lastModified: file.lastModified,
        fileFormat: fileFormat,
        validFormat: isFileFormatValid,
      };
    case "fileUpload/reset":
      return {
        ...state,
        fileName: "",
        fileSize: "",
        lastModified: "",
        fileFormat: "",
        validFormat: undefined,
      };
    default:
      return state;
  }
};

export default fileUploadReducer;
