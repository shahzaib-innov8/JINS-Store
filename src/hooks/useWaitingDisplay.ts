import { use } from 'react'
import { WebSocketContext } from '../context/WebSocketContext';
import { defaultWaitTimeText, waitTimeText } from '../constants/waitTimeText';

const useWaitingDisplay = () => {
    const {data, calledList, waitingList, countryCode } = use(WebSocketContext);
    // handle region based content 
    const { heading, subheadings } = waitTimeText[countryCode] || defaultWaitTimeText;
    const {earliest, latest} = data?.waitTimeRange ?? {earliest: '', latest: ''};
    // conditional variables
    const hasCalled = calledList.length > 0;
    const hasWaiting = waitingList.length > 0;
    const hasEarliest = earliest || earliest === 0;
    const hasCalledAndWaiting = hasCalled && hasWaiting;
    const hasCalledLongList = calledList.length > 5;
    const hasWaitingLongList = waitingList.length > 5;
    const noWaitingWithCalledLongList = !hasWaiting && hasCalledLongList;
    const noCalledWithWaitingLongList = !hasCalled && hasWaitingLongList;
    const waitingWithCalledLongList = hasWaiting && hasCalledLongList;
    const calledWithWaitingLongList = hasCalled && hasWaitingLongList;
    // functions based on the conditions
    const hasBothOrOnlyOneWithLongList = () => hasCalledAndWaiting || noWaitingWithCalledLongList || noCalledWithWaitingLongList;
    const hasBothOrLongList = () => hasCalledAndWaiting || hasCalledLongList || hasWaitingLongList;
    const longListWithCalledOrWaiting = () => waitingWithCalledLongList || calledWithWaitingLongList;
    const shouldUseSmallGap = () => hasCalledAndWaiting || longListWithCalledOrWaiting();

    return {hasEarliest, hasBothOrOnlyOneWithLongList, shouldUseSmallGap, longListWithCalledOrWaiting, hasBothOrLongList, heading, subheadings, earliest, latest}
}

export default useWaitingDisplay