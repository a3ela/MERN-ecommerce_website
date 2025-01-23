import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search..."
        className="mr-sm-2 ml-sm-5 rounded-pill"
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-success"
        className="p-2 mx-2 rounded-circle"
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <FaSearch />
      </Button>
    </Form>
  );
};

export default Search;
