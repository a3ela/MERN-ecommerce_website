import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useCreateProductMutation } from "../../features/productSLice";
import { Link } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { useUploadProductImageMutation } from "../../features/productSLice";
import Loader from "../../components/Loader";
import Modal from "../../components/ConfirmModal";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [createProduct, { isLoading: creating }] = useCreateProductMutation();
  const [uploadProductImage, { isLoading: uploading }] =
    useUploadProductImageMutation();

  const handleConfirm = async () => {
    
    try {
      await createProduct();
      refetch();
      setShowModal(false);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const response = await uploadProductImage(formData).unwrap();
      toast.success(response.message);
      setImage(response.image);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  console.log(showModal);
  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        <FaArrowLeft /> Go Back
      </Link>
      <FormContainer>
        <h1>Create Product</h1>

        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirm}
          title="Create Product"
          message="Are you sure you want to create this product?"
        />
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.Control
              label="Choose File"
              onChange={uploadFileHandler}
              type="file"
            ></Form.Control>
            {uploading && <Loader />}
          </Form.Group>

          <Form.Group controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="countInStock">
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter countInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" style={{ marginTop: "1rem" }}>
            Create Product
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default CreateProduct;
