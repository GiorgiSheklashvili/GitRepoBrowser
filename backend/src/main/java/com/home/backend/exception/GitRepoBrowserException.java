package com.home.backend.exception;

import com.home.backend.ErrorCode;

public class GitRepoBrowserException extends RuntimeException {
    public GitRepoBrowserException() {
    }

    public GitRepoBrowserException(ErrorCode errorCode) {
        super(errorCode.name());
    }

    public GitRepoBrowserException(String message, Throwable cause) {
        super(message, cause);
    }

    public GitRepoBrowserException(Throwable cause) {
        super(cause);
    }

    public GitRepoBrowserException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public GitRepoBrowserException(String message) {

        super(message);
    }
}
