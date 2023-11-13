import { useNavigate } from "react-router-dom";
import { Field, ErrorMessage, Formik } from "formik";

function Category() {
  let navigate = useNavigate();
  const sendDataToProduct = value => {
    navigate(`/product/${value}`);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    sendDataToProduct(values.name);
    setSubmitting(false);
  };

  return (
    <>  
      <h2>Thêm:</h2>
      <Formik
        initialValues={{
          title: "",
          name: ""
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div>
              <label>Chức vụ:</label><br />
              <Field
                style={{ width: "90%" }}
                type="text"
                name="title"
              /><br />
              <ErrorMessage name="title" component="span" className="error-message" />
            </div>
            <div>
              <label>Công việc:</label>
              <Field as="select" name="name">
                <option value="">-- Vui lòng chọn --</option>
                <option value="Lau nhà">Lau nhà</option>
                <option value="Quét nhà">Quét nhà</option>
                <option value="Rửa chén">Rửa chén</option>
              </Field><br />
              <ErrorMessage name="name" component="span" className="error-message" />
            </div>
            <button type="submit">Gửi</button>
          </form>
        )}
      </Formik>
    </>
  );
}
export default Category;