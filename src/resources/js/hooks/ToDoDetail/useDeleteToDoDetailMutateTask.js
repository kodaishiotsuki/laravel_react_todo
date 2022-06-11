import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoDetailMutateTask = () => {
    const queryClient = useQueryClient();
    const deleteToDoDetailMutation = useMutation(
        (toDoDetail) => axios.delete("/api/todoDetails/" + toDoDetail.id),
        {
            onMutate: async (toDoDetail) => {
                //実行中の取得処理をキャンセル
                await queryClient.cancelQueries("toDoList");
                //既存のToDoリストを取得する
                const previousToDoList = queryClient.getQueriesData("toDoList");

                //ToDoリストのキャッシュを更新する
                queryClient.setQueryData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        let newToDoDetails = [];
                        oldToDo.to_do_details.map((oldToDoDetail) => {
                            if (oldToDoDetail.id != toDoDetail.id) {
                                newToDoDetails.push(oldToDoDetail);
                            }
                        });
                        oldToDo.toDoList = newToDoDetails;

                        return oldToDo;
                    })
                );
                //更新に失敗した場合、既存のToDoリストを返却する
                return { previousToDoList };
            },
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { deleteToDoDetailMutation };
};

export default useDeleteToDoDetailMutateTask;
