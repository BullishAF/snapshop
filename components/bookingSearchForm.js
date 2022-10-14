function bookingSearchForm(props) {
  return (
    <div
      className={
        props.size && props.size === 'large'
          ? 'booking-search-form large'
          : 'booking-search-form'
      }
    >
      <input type="search" className="search" placeholder="Location?" />
      <div className="row">
        <div className="col-6">
          <input type="datepicker" className="date" placeholder="Start date" />
        </div>
        <div className="col-6">
          <input
            type="datepicker"
            className="date right"
            placeholder="End date"
          />
        </div>
      </div>
      <select className="guests dropdown-toggle">
        <option>Rental type</option>
        <option>Retail</option>
        <option>Food</option>
        <option>Kiosk</option>
      </select>

      <style jsx>{`
        .booking-search-form input {
          width: 100%;
        }

        .booking-search-form.large .date {
          margin-right: 16px;
          display: inline;
        }

        .booking-search-form.large .search,
        .booking-search-form.large .date,
        .booking-search-form.large .guests {
          background-size: 20px 20px;
          background-position: 16px 14px;
        }

        .booking-search-form .search {
          background: url(/static/search.svg) no-repeat scroll 7px 6px;
          background-size: 15px 15px;
        }

        .booking-search-form .date {
          background: url(/static/cal.svg) no-repeat scroll 7px 6px;
          background-size: 15px 15px;
        }

        .booking-search-form .guests {
          background: url(/static/shop.svg) no-repeat scroll 7px 6px;
          background-size: 15px 15px;
        }
      `}</style>
    </div>
  );
}

export default bookingSearchForm;
