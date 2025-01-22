import { Pagination, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginate = ({ page, pages, isAdmin = false, keyword = "" }) => {
  return (
    <>
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Nav.Item key={x + 1}>
            <Nav.Link
              as={Link}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/productlist/page/${x + 1}`
              }
              active={x + 1 === page}
              className="page-link"
            >
              {x + 1}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Pagination>
      <style jsx="true">{`
        .page-link {
          color: #007bff;
          text-decoration: none;
        }

        .page-link:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .page-item.active .page-link {
          background-color: #007bff;
          border-color: #007bff;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Paginate;
