const JoinedGroup = (props:{groupName:string}) => {
    return (
        <div className="joined-group">
            {props.groupName} 그룹의 정보
        </div>
    )
}

export default JoinedGroup;