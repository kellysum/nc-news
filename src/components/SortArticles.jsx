import { useSearchParams } from "react-router-dom";

const SortArticles = ({ sortBy, setSortBy, sortOrder, setSortOrder }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSortBy = (event) => {
      const sortByValue = event.target.value;
      setSortBy(sortByValue);
      setSearchParams({ ...searchParams, sortBy: sortByValue, sortOrder });
  };
  
  const handleSortOrder = (event) => {
      const sortOrderValue = event.target.value;
      setSortOrder(sortOrderValue);
      setSearchParams({ ...searchParams, sortOrder: sortOrderValue, sortBy });
  };

    return (
        <div>
            <label>Sort By: </label>
            <select value={sortBy} onChange={handleSortBy}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>

            <label>Sort Order: </label>
            <select value={sortOrder} onChange={handleSortOrder}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
};

export default SortArticles;
