import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Products from "../components/Products";
import { useGetProductsQuery } from "../features/productSLice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { FaArrowLeft } from "react-icons/fa";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

const Home = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber: Number(pageNumber),
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to={"/"} className="btn btn-light mb-4">
          <FaArrowLeft />
        </Link>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title="Home - EcomHub" />
          {keyword ? <h1>Search Results</h1> : <h1>Latest Products</h1>}
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Products product={product} />
              </Col>
            ))}
          </Row>
          <Row className="justify-content-md-center">
            <Col className="d-flex justify-content-center">
              <Paginate
                pages={data.pages}
                page={data.page}
                keyword={keyword ? keyword : ""}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Home;
