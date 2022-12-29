// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file kakeibo/v1/kakeibo.proto (package kakeibo.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message kakeibo.v1.PageingData
 */
export class PageingData extends Message<PageingData> {
  /**
   * @generated from field: string cursor_id = 1;
   */
  cursorId = "";

  /**
   * @generated from field: int32 created_at = 2;
   */
  createdAt = 0;

  /**
   * @generated from field: int32 limit = 3;
   */
  limit = 0;

  constructor(data?: PartialMessage<PageingData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.PageingData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cursor_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_at", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PageingData {
    return new PageingData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PageingData {
    return new PageingData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PageingData {
    return new PageingData().fromJsonString(jsonString, options);
  }

  static equals(a: PageingData | PlainMessage<PageingData> | undefined, b: PageingData | PlainMessage<PageingData> | undefined): boolean {
    return proto3.util.equals(PageingData, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.MemberData
 */
export class MemberData extends Message<MemberData> {
  /**
   * @generated from field: string uid = 1;
   */
  uid = "";

  /**
   * @generated from field: bool is_admin = 2;
   */
  isAdmin = false;

  constructor(data?: PartialMessage<MemberData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.MemberData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_admin", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemberData {
    return new MemberData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemberData {
    return new MemberData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemberData {
    return new MemberData().fromJsonString(jsonString, options);
  }

  static equals(a: MemberData | PlainMessage<MemberData> | undefined, b: MemberData | PlainMessage<MemberData> | undefined): boolean {
    return proto3.util.equals(MemberData, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.LedgerLineData
 */
export class LedgerLineData extends Message<LedgerLineData> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: int32 amount = 2;
   */
  amount = 0;

  /**
   * @generated from field: string type = 3;
   */
  type = "";

  /**
   * @generated from field: string description = 4;
   */
  description = "";

  /**
   * @generated from field: int32 date = 5;
   */
  date = 0;

  /**
   * @generated from field: int32 created_at = 6;
   */
  createdAt = 0;

  constructor(data?: PartialMessage<LedgerLineData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.LedgerLineData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "date", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "created_at", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LedgerLineData {
    return new LedgerLineData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LedgerLineData {
    return new LedgerLineData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LedgerLineData {
    return new LedgerLineData().fromJsonString(jsonString, options);
  }

  static equals(a: LedgerLineData | PlainMessage<LedgerLineData> | undefined, b: LedgerLineData | PlainMessage<LedgerLineData> | undefined): boolean {
    return proto3.util.equals(LedgerLineData, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.SignInRequest
 */
export class SignInRequest extends Message<SignInRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string low_password = 2;
   */
  lowPassword = "";

  constructor(data?: PartialMessage<SignInRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.SignInRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "low_password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInRequest {
    return new SignInRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SignInRequest | PlainMessage<SignInRequest> | undefined, b: SignInRequest | PlainMessage<SignInRequest> | undefined): boolean {
    return proto3.util.equals(SignInRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.SignInResponse
 */
export class SignInResponse extends Message<SignInResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<SignInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.SignInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInResponse {
    return new SignInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SignInResponse | PlainMessage<SignInResponse> | undefined, b: SignInResponse | PlainMessage<SignInResponse> | undefined): boolean {
    return proto3.util.equals(SignInResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.GetLedgerRequest
 */
export class GetLedgerRequest extends Message<GetLedgerRequest> {
  /**
   * @generated from field: string ledger_id = 1;
   */
  ledgerId = "";

  constructor(data?: PartialMessage<GetLedgerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.GetLedgerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ledger_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLedgerRequest {
    return new GetLedgerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLedgerRequest {
    return new GetLedgerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLedgerRequest {
    return new GetLedgerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetLedgerRequest | PlainMessage<GetLedgerRequest> | undefined, b: GetLedgerRequest | PlainMessage<GetLedgerRequest> | undefined): boolean {
    return proto3.util.equals(GetLedgerRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.GetLedgerResponse
 */
export class GetLedgerResponse extends Message<GetLedgerResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string admin_uid = 2;
   */
  adminUid = "";

  /**
   * @generated from field: repeated string member_uids = 3;
   */
  memberUids: string[] = [];

  constructor(data?: PartialMessage<GetLedgerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.GetLedgerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "admin_uid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "member_uids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLedgerResponse {
    return new GetLedgerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLedgerResponse {
    return new GetLedgerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLedgerResponse {
    return new GetLedgerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetLedgerResponse | PlainMessage<GetLedgerResponse> | undefined, b: GetLedgerResponse | PlainMessage<GetLedgerResponse> | undefined): boolean {
    return proto3.util.equals(GetLedgerResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.AddLedgerRequest
 */
export class AddLedgerRequest extends Message<AddLedgerRequest> {
  /**
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<AddLedgerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.AddLedgerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLedgerRequest {
    return new AddLedgerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLedgerRequest {
    return new AddLedgerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLedgerRequest {
    return new AddLedgerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AddLedgerRequest | PlainMessage<AddLedgerRequest> | undefined, b: AddLedgerRequest | PlainMessage<AddLedgerRequest> | undefined): boolean {
    return proto3.util.equals(AddLedgerRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.AddLedgerResponse
 */
export class AddLedgerResponse extends Message<AddLedgerResponse> {
  constructor(data?: PartialMessage<AddLedgerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.AddLedgerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLedgerResponse {
    return new AddLedgerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLedgerResponse {
    return new AddLedgerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLedgerResponse {
    return new AddLedgerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AddLedgerResponse | PlainMessage<AddLedgerResponse> | undefined, b: AddLedgerResponse | PlainMessage<AddLedgerResponse> | undefined): boolean {
    return proto3.util.equals(AddLedgerResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.UpdateLedgerRequest
 */
export class UpdateLedgerRequest extends Message<UpdateLedgerRequest> {
  /**
   * @generated from field: string ledger_id = 1;
   */
  ledgerId = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<UpdateLedgerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.UpdateLedgerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ledger_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLedgerRequest {
    return new UpdateLedgerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLedgerRequest {
    return new UpdateLedgerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLedgerRequest {
    return new UpdateLedgerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateLedgerRequest | PlainMessage<UpdateLedgerRequest> | undefined, b: UpdateLedgerRequest | PlainMessage<UpdateLedgerRequest> | undefined): boolean {
    return proto3.util.equals(UpdateLedgerRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.UpdateLedgerResponse
 */
export class UpdateLedgerResponse extends Message<UpdateLedgerResponse> {
  constructor(data?: PartialMessage<UpdateLedgerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.UpdateLedgerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLedgerResponse {
    return new UpdateLedgerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLedgerResponse {
    return new UpdateLedgerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLedgerResponse {
    return new UpdateLedgerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateLedgerResponse | PlainMessage<UpdateLedgerResponse> | undefined, b: UpdateLedgerResponse | PlainMessage<UpdateLedgerResponse> | undefined): boolean {
    return proto3.util.equals(UpdateLedgerResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.RemoveLedgerRequest
 */
export class RemoveLedgerRequest extends Message<RemoveLedgerRequest> {
  /**
   * @generated from field: string ledger_id = 1;
   */
  ledgerId = "";

  constructor(data?: PartialMessage<RemoveLedgerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.RemoveLedgerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ledger_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLedgerRequest {
    return new RemoveLedgerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLedgerRequest {
    return new RemoveLedgerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLedgerRequest {
    return new RemoveLedgerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveLedgerRequest | PlainMessage<RemoveLedgerRequest> | undefined, b: RemoveLedgerRequest | PlainMessage<RemoveLedgerRequest> | undefined): boolean {
    return proto3.util.equals(RemoveLedgerRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.RemoveLedgerResponse
 */
export class RemoveLedgerResponse extends Message<RemoveLedgerResponse> {
  constructor(data?: PartialMessage<RemoveLedgerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.RemoveLedgerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLedgerResponse {
    return new RemoveLedgerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLedgerResponse {
    return new RemoveLedgerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLedgerResponse {
    return new RemoveLedgerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveLedgerResponse | PlainMessage<RemoveLedgerResponse> | undefined, b: RemoveLedgerResponse | PlainMessage<RemoveLedgerResponse> | undefined): boolean {
    return proto3.util.equals(RemoveLedgerResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.AddLedgerMemberRequest
 */
export class AddLedgerMemberRequest extends Message<AddLedgerMemberRequest> {
  /**
   * @generated from field: string ledger_id = 1;
   */
  ledgerId = "";

  /**
   * @generated from field: kakeibo.v1.MemberData member = 2;
   */
  member?: MemberData;

  constructor(data?: PartialMessage<AddLedgerMemberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.AddLedgerMemberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ledger_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member", kind: "message", T: MemberData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLedgerMemberRequest {
    return new AddLedgerMemberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLedgerMemberRequest {
    return new AddLedgerMemberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLedgerMemberRequest {
    return new AddLedgerMemberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AddLedgerMemberRequest | PlainMessage<AddLedgerMemberRequest> | undefined, b: AddLedgerMemberRequest | PlainMessage<AddLedgerMemberRequest> | undefined): boolean {
    return proto3.util.equals(AddLedgerMemberRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.AddLedgerMemberResponse
 */
export class AddLedgerMemberResponse extends Message<AddLedgerMemberResponse> {
  constructor(data?: PartialMessage<AddLedgerMemberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.AddLedgerMemberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLedgerMemberResponse {
    return new AddLedgerMemberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLedgerMemberResponse {
    return new AddLedgerMemberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLedgerMemberResponse {
    return new AddLedgerMemberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AddLedgerMemberResponse | PlainMessage<AddLedgerMemberResponse> | undefined, b: AddLedgerMemberResponse | PlainMessage<AddLedgerMemberResponse> | undefined): boolean {
    return proto3.util.equals(AddLedgerMemberResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.RemoveLedgerMemberRequest
 */
export class RemoveLedgerMemberRequest extends Message<RemoveLedgerMemberRequest> {
  /**
   * @generated from field: string ledger_id = 1;
   */
  ledgerId = "";

  /**
   * @generated from field: kakeibo.v1.MemberData member = 2;
   */
  member?: MemberData;

  constructor(data?: PartialMessage<RemoveLedgerMemberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.RemoveLedgerMemberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ledger_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member", kind: "message", T: MemberData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLedgerMemberRequest {
    return new RemoveLedgerMemberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLedgerMemberRequest {
    return new RemoveLedgerMemberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLedgerMemberRequest {
    return new RemoveLedgerMemberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveLedgerMemberRequest | PlainMessage<RemoveLedgerMemberRequest> | undefined, b: RemoveLedgerMemberRequest | PlainMessage<RemoveLedgerMemberRequest> | undefined): boolean {
    return proto3.util.equals(RemoveLedgerMemberRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.RemoveLedgerMemberResponse
 */
export class RemoveLedgerMemberResponse extends Message<RemoveLedgerMemberResponse> {
  constructor(data?: PartialMessage<RemoveLedgerMemberResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.RemoveLedgerMemberResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLedgerMemberResponse {
    return new RemoveLedgerMemberResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLedgerMemberResponse {
    return new RemoveLedgerMemberResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLedgerMemberResponse {
    return new RemoveLedgerMemberResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveLedgerMemberResponse | PlainMessage<RemoveLedgerMemberResponse> | undefined, b: RemoveLedgerMemberResponse | PlainMessage<RemoveLedgerMemberResponse> | undefined): boolean {
    return proto3.util.equals(RemoveLedgerMemberResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.AddLineRequest
 */
export class AddLineRequest extends Message<AddLineRequest> {
  constructor(data?: PartialMessage<AddLineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.AddLineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLineRequest {
    return new AddLineRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLineRequest {
    return new AddLineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLineRequest {
    return new AddLineRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AddLineRequest | PlainMessage<AddLineRequest> | undefined, b: AddLineRequest | PlainMessage<AddLineRequest> | undefined): boolean {
    return proto3.util.equals(AddLineRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.AddLineResponse
 */
export class AddLineResponse extends Message<AddLineResponse> {
  constructor(data?: PartialMessage<AddLineResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.AddLineResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLineResponse {
    return new AddLineResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLineResponse {
    return new AddLineResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLineResponse {
    return new AddLineResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AddLineResponse | PlainMessage<AddLineResponse> | undefined, b: AddLineResponse | PlainMessage<AddLineResponse> | undefined): boolean {
    return proto3.util.equals(AddLineResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.UpdateLineRequest
 */
export class UpdateLineRequest extends Message<UpdateLineRequest> {
  /**
   * @generated from field: kakeibo.v1.LedgerLineData data = 1;
   */
  data?: LedgerLineData;

  constructor(data?: PartialMessage<UpdateLineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.UpdateLineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: LedgerLineData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLineRequest {
    return new UpdateLineRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLineRequest {
    return new UpdateLineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLineRequest {
    return new UpdateLineRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateLineRequest | PlainMessage<UpdateLineRequest> | undefined, b: UpdateLineRequest | PlainMessage<UpdateLineRequest> | undefined): boolean {
    return proto3.util.equals(UpdateLineRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.UpdateLineResponse
 */
export class UpdateLineResponse extends Message<UpdateLineResponse> {
  constructor(data?: PartialMessage<UpdateLineResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.UpdateLineResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLineResponse {
    return new UpdateLineResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLineResponse {
    return new UpdateLineResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLineResponse {
    return new UpdateLineResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateLineResponse | PlainMessage<UpdateLineResponse> | undefined, b: UpdateLineResponse | PlainMessage<UpdateLineResponse> | undefined): boolean {
    return proto3.util.equals(UpdateLineResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.RemoveLineRequest
 */
export class RemoveLineRequest extends Message<RemoveLineRequest> {
  /**
   * @generated from field: string line_id = 1;
   */
  lineId = "";

  constructor(data?: PartialMessage<RemoveLineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.RemoveLineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "line_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLineRequest {
    return new RemoveLineRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLineRequest {
    return new RemoveLineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLineRequest {
    return new RemoveLineRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveLineRequest | PlainMessage<RemoveLineRequest> | undefined, b: RemoveLineRequest | PlainMessage<RemoveLineRequest> | undefined): boolean {
    return proto3.util.equals(RemoveLineRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.RemoveLineResponse
 */
export class RemoveLineResponse extends Message<RemoveLineResponse> {
  constructor(data?: PartialMessage<RemoveLineResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.RemoveLineResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLineResponse {
    return new RemoveLineResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLineResponse {
    return new RemoveLineResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLineResponse {
    return new RemoveLineResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveLineResponse | PlainMessage<RemoveLineResponse> | undefined, b: RemoveLineResponse | PlainMessage<RemoveLineResponse> | undefined): boolean {
    return proto3.util.equals(RemoveLineResponse, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.ListLineRequest
 */
export class ListLineRequest extends Message<ListLineRequest> {
  /**
   * @generated from field: kakeibo.v1.PageingData page = 1;
   */
  page?: PageingData;

  /**
   * @generated from field: string ledger_id = 2;
   */
  ledgerId = "";

  constructor(data?: PartialMessage<ListLineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.ListLineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "message", T: PageingData },
    { no: 2, name: "ledger_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLineRequest {
    return new ListLineRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLineRequest {
    return new ListLineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLineRequest {
    return new ListLineRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListLineRequest | PlainMessage<ListLineRequest> | undefined, b: ListLineRequest | PlainMessage<ListLineRequest> | undefined): boolean {
    return proto3.util.equals(ListLineRequest, a, b);
  }
}

/**
 * @generated from message kakeibo.v1.ListLineResponse
 */
export class ListLineResponse extends Message<ListLineResponse> {
  /**
   * @generated from field: repeated kakeibo.v1.LedgerLineData lines = 1;
   */
  lines: LedgerLineData[] = [];

  constructor(data?: PartialMessage<ListLineResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kakeibo.v1.ListLineResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "lines", kind: "message", T: LedgerLineData, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLineResponse {
    return new ListLineResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLineResponse {
    return new ListLineResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLineResponse {
    return new ListLineResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListLineResponse | PlainMessage<ListLineResponse> | undefined, b: ListLineResponse | PlainMessage<ListLineResponse> | undefined): boolean {
    return proto3.util.equals(ListLineResponse, a, b);
  }
}

