function movePiece(fromIndex, toIndex) {
    const piece = pieces[fromIndex];
    const targetPiece = pieces[toIndex];

    // 確認目標位置是否有對方棋子（即目標位置不為空，且與起始棋子不同顏色）
    if (targetPiece === '' || (piece !== '' && piece.toLowerCase() !== targetPiece.toLowerCase())) {
        // 如果目標位置有棋子，且棋子顏色不同，則捕獲對方棋子
        pieces[toIndex] = piece;
        pieces[fromIndex] = '';
        setupPieces();
    }
}
