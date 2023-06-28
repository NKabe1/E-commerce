import { SLoadingSpinner } from "./SLoadingSpinner.styled";

export function LoadingSpinner() {
  return (
    <SLoadingSpinner>
      <div className="wrapper-div">
        <div className="flex justify-center">
          <div className="spinner" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </SLoadingSpinner>
  );
}
