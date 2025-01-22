import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import { useGetProductsQuery } from "../features/productSLice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

const Home = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Products product={product} />
              </Col>
            ))}
          </Row>
          <Row className="justify-content-md-center">
            <Col className="d-flex justify-content-center">
              <Paginate pages={data.pages} page={data.page} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Home;
