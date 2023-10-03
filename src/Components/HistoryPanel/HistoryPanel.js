import React from 'react';
import './HistoryPanel.css';

const HistoryPanel = ({ history, clearHistory, onClose }) => {
  return (
    <div className="history-panel">
    <span>History</span>
      <div className="history-list">
      {history.length === 0 ? 'There is no history yet.':''}
        {history.map((entry, index) => (
          <div key={index} className="history-entry">
            {entry}
          </div>
        ))}
      </div>
      <button className="clear-history" onClick={clearHistory}>
        Clear
      </button>
      <button className="close-history" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default HistoryPanel
