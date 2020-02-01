/*
Victory Condition Script for Connect4
Author: Robert Doyle 2020
*/


/*
Checks if a player has won, and ends it if that is the case.
*/
function checkVictory(rowIndex, columnIndex) {
	if (checkHorizontal(rowIndex, columnIndex)) {
		return true;
	}
	if (checkVertical(rowIndex, columnIndex)) {
		return true;
	}
	if (checkBLTRDiagonal(rowIndex, columnIndex)) {
		return true;
	}
	if (checkTLBRDiagonal(rowIndex, columnIndex)) {
		return true;
	}
	return false;
}


function checkHorizontal(rowIndex, columnIndex) {
	var successiveCounters = 1;
	for (i = columnIndex + 1; i < BOARD_WIDTH; i++) {
		if (board.rows[rowIndex].cells[i].value == playerTurn) {
			successiveCounters++;
		} else {
			break;
		}
	}

	for (i = columnIndex - 1; i >= 0; i--) {
		if (board.rows[rowIndex].cells[i].value == playerTurn) {
			successiveCounters++;
		} else {
			break;
		}
	}

	if (successiveCounters >= WINNING_LENGTH) {
		return true;
	} else {
		return false;
	}
}


function checkVertical(rowIndex, columnIndex) {
	var successiveCounters = 1;
	for (i = rowIndex + 1; i < BOARD_HEIGHT; i++) {
		if (board.rows[i].cells[columnIndex].value == playerTurn) {
			successiveCounters++;
		} else {
			break;
		}
	}

	for (i = rowIndex - 1; i >= 0; i--) {
		if (board.rows[i].cells[columnIndex].value == playerTurn) {
			successiveCounters++;
		} else {
			break;
		}
	}

	if (successiveCounters >= WINNING_LENGTH) {
		return true;
	} else {
		return false;
	}
}


function checkTLBRDiagonal(rowIndex, columnIndex) {
	var successiveCounters = 1;
	for (i = columnIndex + 1; i < BOARD_WIDTH; i++) {

		if (rowIndex + (i - columnIndex) < BOARD_HEIGHT) {
			if (board.rows[rowIndex + (i - columnIndex)].cells[i].value == playerTurn) {
				successiveCounters++;
			} else {
				break;
			}
		} else {
			break;
		}
	}

	for (i = columnIndex - 1; i >= 0; i--) {
		if (rowIndex - (i - columnIndex) >= 0) {
			if (board.rows[rowIndex + (i - columnIndex)].cells[i].value == playerTurn) {
				successiveCounters++;
			} else {
				break;
			}
		} else {
			break;
		}
	}

	if (successiveCounters >= WINNING_LENGTH) {
		return true;
	} else {
		return false;
	}
}


function checkBLTRDiagonal(rowIndex, columnIndex) {
	var successiveCounters = 1;
	for (i = columnIndex + 1; i < BOARD_WIDTH; i++) {

		if (rowIndex - (i - columnIndex) >= 0) {
			if (board.rows[rowIndex - (i - columnIndex)].cells[i].value == playerTurn) {
				successiveCounters++;
			} else {
				break;
			}
		} else {
			break;
		}
	}

	for (i = columnIndex - 1; i >= 0; i--) {
		if (rowIndex + (columnIndex - i) < BOARD_HEIGHT) {
			if (board.rows[rowIndex + (columnIndex - i)].cells[i].value == playerTurn) {
				successiveCounters++;
			} else {
				break;
			}
		} else {
			break;
		}
	}

	if (successiveCounters >= WINNING_LENGTH) {
		return true;
	} else {
		return false;
	}
}