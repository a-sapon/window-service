import React from 'react';
import styles from './PriceModal.module.css';
import { closeResponseModal } from '../../redux/actionCreators';
import { connect } from 'react-redux';

const ResponseModal = ({ closeResponseModal, response }) => {
  

  const closeModal = (e) => {
    if (
      e.target === e.currentTarget ||
      e.target.dataset.action === 'close-modal'
    ) {
      closeResponseModal();
    }
  };

  return (
    <div onClick={closeModal} className={styles.overlay}>
      <div className={styles.modal}>
        <p className={response.status === 'ok' ? styles.responseOk : styles.responseError}>{response.message}</p>

        <span data-action='close-modal' className={styles.closeBtn}>
          <svg
            data-action='close-modal'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              data-action='close-modal'
              d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z'
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ response }) => ({
  response
})

export default connect(mapStateToProps, { closeResponseModal })(ResponseModal);
