import ArrayProblems, {
  ContainsDuplicatesResult,
} from "../../store/ArrayProblems";

function useArrayPage() {
  const handleCheckDuplicates = async (
    inputString: string,
  ): Promise<ContainsDuplicatesResult> => {
    const numbers = inputString.split(",").map((number) => {
      const parsed = parseInt(number.trim());
      if (isNaN(parsed)) throw new Error(`Invalid number: ${number.trim()}`);
      return parsed;
    });

    return await ArrayProblems.containsDuplicates(numbers);
  };

  return { handleCheckDuplicates };
}

export default useArrayPage;
